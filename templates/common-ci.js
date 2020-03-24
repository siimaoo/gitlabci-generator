export function common(user, ip, path) {
  return `image: 
stages:
  - deploy

deploy:
  stage: deploy
  only:
    - master
  script:
    - mkdir -p ~/.ssh
    - echo "$PRODUCTION_KEY" >> ~/.ssh/id_rsa
    - chmod 600 ~/.ssh/id_rsa
    - echo -e "Host *\\n\\tStrictHostKeyChecking no\\n\\n" > ~/.ssh/config
    - rsync --progress -rav -e "ssh" --delete * ${user}@${ip}:../${path}
    - ssh ${user}@${ip} "chown -R root.root ..${path}"
  `;
}