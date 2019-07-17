import multer from 'multer'; // Função de trab com imagens
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  Storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (req, file, cb) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
