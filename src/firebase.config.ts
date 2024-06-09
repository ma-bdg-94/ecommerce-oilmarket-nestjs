import * as admin from 'firebase-admin';
import serviceAccount from './service_account_key.json'

const databaseURL = process.env.DATABASE_URL || ''

export default admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL
});
