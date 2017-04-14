import fs from 'fs-extra';
import path from 'path';

const readFileFor = key => {
  return fs.readJsonSync(
    path.join(__dirname, `../../config/packages/${key}.json`)
  );
};

const loadPackages = () => {
  const base = readFileFor('base');
  const developer = readFileFor('developer');
  const designer = readFileFor('designer');

  let developerList = developer.system.concat(base.system);
  developerList = developerList.map(item => ({
    checked: true,
    name: item,
    type: 'system'
  }));
  let developerCaskList = developer.cask.concat(base.cask);
  developerCaskList = developerCaskList.map(item => ({
    checked: true,
    name: item,
    type: 'cask'
  }));
  developerList = developerList.concat(developerCaskList);

  let designerList = designer.system.concat(base.system);
  designerList = designerList.map(item => ({
    checked: true,
    name: item,
    type: 'system'
  }));
  let designerCaskList = designer.cask.concat(base.cask);
  designerCaskList = designerCaskList.map(item => ({
    checked: true,
    name: item,
    type: 'cask'
  }));
  designerList = designerList.concat(designerCaskList);

  return {
    developer: developerList,
    designer: designerList
  };
};

const initialState = {
  packagesForRoles: loadPackages(),
  packages: [],
  common: readFileFor('common')
};

const types = {
  PACKAGES_SELECT: 'PACKAGES/PACKAGES_SELECT'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case types.PACKAGES_SELECT:
    return { ...state, packages: action.payload.packages };
  default:
    return state;
  }
};

const actions = {
  togglePackage: options => togglePackage(options),
  setPackagesForRole: role => setPackagesForRole(role)
};

const togglePackage = name => {
  return (dispatch, getState) => {
    let { packages } = getState().packages;
    packages = packages.map(item => {
      if (item.name == name) {
        item.checked = !item.checked;
      }
      return item;
    });
    return dispatch({ type: types.PACKAGES_SELECT, payload: { packages } });
  };
};

const setPackagesForRole = role => {
  return (dispatch, getState) => {
    const packages = getState().packages.packagesForRoles[role.key];
    return dispatch({ type: types.PACKAGES_SELECT, payload: { packages } });
  };
};

export { initialState, actions, reducer };
