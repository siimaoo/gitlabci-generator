<template>
  <ul id="instructions">
    <li>
      <p>
        First type the instance user, and then the IP address of your instance.
        Finally, indicate the way you want your files to go.
        Click on generate CI file to download the file.
      </p>
    </li>

    <li>
      <p>
        Now you have to rename the file to "gitlab-ci.yml"
        After, add this file to the repository
      </p>
    </li>

    <li>
      <p>On gitlab, open the repository and select "Settings" from the left side menu and click on "CI/CD"</p>
    </li>

    <li>
      <p>The page that opened contains the session called "Variables", click on the "Expand" button.</p>
    </li>

    <li>
      <p>
        Now you have to create a variable where key is "PRODUCTION_KEY" and the value is the private key of your
        instance.
      </p>
    </li>

    <li>
      <p>
        Click on "Save variables" and everything is set, everytime there is a change on the master, your files will be
        sent to your instance, right in the folder you had informed.
      </p>
    </li>
  </ul>
</template>

<style lang="scss">
  @import '../assets/components/instructions.scss'
</style>