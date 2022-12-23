import NotesHandler from './handler';
import routes from './routes';

export const name = 'notes';
export const version = '1.0.0';
export async function register(server, { service }) {
  const notesHandler = new NotesHandler(service);
  server.route(routes(notesHandler));
}
