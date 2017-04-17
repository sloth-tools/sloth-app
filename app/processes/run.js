import userHome from 'user-home';
import fs from 'fs-extra';
import yaml from 'js-yaml';
import { exec } from 'child_process';

const run = (data, callback) => {
  const { packages, common, playbooks } = data;
  let userSystemList = packages.filter(
    option => option.type == 'system' && option.checked
  );
  let userCaskList = packages.filter(
    option => option.type == 'cask' && option.checked
  );

  let tasks = common[0].tasks;
  tasks[0].homebrew.name = userSystemList.map(item => item.name);
  tasks[2].homebrew_cask.name = userCaskList.map(item => item.name);

  const slothPath = `${userHome}/.sloth`;
  const inventoryPath = `${slothPath}/sloth_inventory`;
  const yamlPath = `${slothPath}/sloth_install.yml`;
  const userPath = `${slothPath}/user`;

  try {
    fs.mkdirSync(slothPath);
  } catch (e) {
    console.log({ e });
  }
  try {
    fs.mkdirSync(userPath);
  } catch (e) {
    console.log({ e });
  }
  fs.writeFileSync(inventoryPath, '[localhost]\n127.0.0.1');
  fs.writeFileSync(yamlPath, yaml.dump(common));

  exec(
    `git clone https://gist.github.com/834f8eddb2ff978de4e5e69898301563.git ${slothPath}/sloth_scripts && chmod ugo+rwx ${slothPath}/sloth_scripts/sloth_install.sh`,
    () => {
      const playbooksCopyCommand = playbooks
        .map(playbook => `cp ${playbook.path} ${userPath}/${playbook.name}`)
        .join('; ');
      exec(playbooksCopyCommand, () => {
        exec(
          `open -a Terminal ${slothPath}/sloth_scripts/sloth_install.sh`,
          callback
        );
      });
    }
  );
};

export default run;
