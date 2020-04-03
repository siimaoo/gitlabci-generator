import fs from 'fs';
import { common } from '../templates/common-ci';

class generateController {
  generate(req, res) {
    const { user, ip, path } = req.body;

    let file = common(user, ip, path);

    fs.writeFile(__dirname + `/../ci-files/${ip}.yml`, file, (err) => {
      if (err) {
        return res.send(
          {
            success: false,
            message: "An error ocurred! Please, try again later.",
            errorLog: err
          }
        );
      }

      return res.send(
        {
          success: true,
          message: "Your gitlab-ci file has been created, click on the link below to download your file! Ps. We keep the result file in our servers for 10 minutes. If you do not finish the download within this time, you will have to generate another file!",
          urlDownload: `/download/${ip}.yml`
        }
      )
    })
  }

  download(req, res) {
    const { fileName } = req.params;
    return res.download(__dirname + `/../ci-files/${fileName}`);
  }
}

export default new generateController();