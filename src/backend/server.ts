import * as logger from 'winston';
import { server } from './config/app';


const PORT = server.get('port');
const HOST = server.get('host');


server
.listen(PORT, HOST, (error: Error) => {
	if (error) {
		logger.error(error.message);
		throw error;
	}
  logger.info(`Server running @ ${HOST}:${PORT}`);
});

