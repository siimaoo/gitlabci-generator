import { common } from '../templates/common-ci';

class generateController {
  generate(req, res) {
    const { user, ip, path } = req.body;

    const fileData = common(user, ip, path);
    const fileName = 'gitlab-ci.txt'
    const fileType = 'text/plain'
  
    res.writeHead(200, {
      'Content-Disposition': `attachment; filename="${fileName}"`,
      'Content-Type': fileType,
    })

    const download = Buffer.from(fileData);
    res.end(download);
  }
}

export default new generateController();