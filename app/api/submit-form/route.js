import {google} from 'googleapis';
import { NextResponse } from 'next/server';
const sheets = google.sheets('v4');
const keys = {
  "type": "service_account",
  "project_id": "jewelone",
  "private_key_id": "291cd8e3c44f161eb445a6951a7126bc3f823b49",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCulc1hoTYoygTW\niSrc77Kkrnx7IIuA2TPJMAZJHXiWdSN4pUFdDc+AakKFUvyCQh412OjN1Es2g7VI\nhVx1qih7fia+fB5DW5D6axIV5QfMe4ui6K6BPUkH03LKxfcQ910rgbIM/LMW/b19\nyd+AiYkr9wLznxxA04QNmGGT0ZmOiZswQQ2TuxRiGm7VovaJmg8K7kHCLaiSQk3Y\nRmYaON9UR/PsWsxHDKLjcU66DARA3QcpJ46E5TxkGv+M4DNyYEV3gcbNUGpwPqM4\ndJlQWvxBz8khJ4EJCBZ8OPBO0MHVHb3BXT7Vg/JVFZf/cQbhMjZTGeDIJgI/QQIo\n8IngG281AgMBAAECggEAL9e2biw3AsuFsuLo/52iN3Xnf/hlslwTUG1cM5ojaxvT\nqiKjPGRl+jtkWlPpBasnyzrTZWBpchl6ytJdCZOlP15NMMMjqfLEUpOX468dSYCL\nvguEkr8gLchYu0+vypL3Ec6bY+q2CzViwb9aA8fs8sLgqLFwFSXBmNYq207DhWcl\nWygTTpwO/yyl+Lqie851me1w81TkpUnEpPfSheLd4iliKMz5FNmM4waONEOxH3nk\nPp5bFtUVyEd3gpXDGGGHJa2hdf8Y7p9pQnfsGQ6fOm/IcJrggsQi4ZmwzktYmMrF\n8k5orIxU4BncA9dhYoq+mn92pvmW+mKDeqAOXL1yqwKBgQDY68Kro1ZMbdd9In1v\nS40zjZSbWbvOoKEktlzPWXjrF7larqw3aim75NUaCgWCviTGzjKi8QSqb5fM9cIv\n+s7H8hBajpxSN5hdCISnEqJFkNGJppee4H/tErket2BpNYIDtfLH30jqLZVjlGyf\n7fJoYVsT786Ay0T1bcD0wh1pfwKBgQDOCYvIOafRR78wiqYMkh2g/dvzRTesOk5o\niD6YMIw+JQicXCmykG56HLAEGOciQQAGlvHJ15jOJVR0I0+8sUSYWh7Lu45X15nz\n+F8X2fIKU96kDTEDJ6yt3eRG9i2H3gtBjUnvyfph8Wx9Sk4ZyvUnFIDibyCexHM+\n/zpuIJ/5SwKBgCQ2r8gxu42E5O26HVDAPzF1GHMa9vSW8nALldDz8fDlhAc0lAGo\nUpFQsZboR2U9UyxxbhivvgSqHqCUArg52d2ddsd3eXdsWp5ldqfhv393ntOpITTf\n69trPcZ3/LtzuGHgNUjS6PxXYdI/DCdi9Q4h+q+IYGQ2CywiB42U/o4HAoGAF1sD\nqmXGvTV52cHNwt0JWMeOGEx/XBmb68ON/Oh77Ut7Z2YXH/O5YkRAO6arBLoDi7uu\nmufCnZOjuCqMjmI12WNV3FhdcV2ySPKdrPF6u2r4cPZB2Q61R1xA1T5wuNcVxY+D\nkxf9Nv8MAkPbCJd2JMDxPznDo9u3CKwb7oHqQHMCgYEAmEjjStl2Xnd3VuNeyCJL\nR8nn3v/KE7EjIiV6mmdNi74oVY+a/fXnrIN6LvlwFMh1bwT2pFTPTixJirjQLa4j\ntdMjlSAKYuS6qwVF0O6+Q4wMXTEZymUJ29LHRgzZ8s4FTjr6Tz+HWSk4YJMbCPx9\nvtGQa7EV7hfDiIi3qFXFW74=\n-----END PRIVATE KEY-----\n",
  "client_email": "jewelone-form@jewelone.iam.gserviceaccount.com",
  "client_id": "104475036638941666985",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/jewelone-form%40jewelone.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};


export async function POST(req) {
  const { firstName, lastName, email, city, phoneNumber, factoryVisit } = req.body;
  
  const auth = await authenticate({
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });
  google.options({auth});

  const res = await sheets.spreadsheets.values.append({
    spreadsheetId:"1qME0Rv_flJNOTHgGa2i41kSfT6iDrglz-J5LR7cgd7s",
    range:'A3',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        ['Justin', '1/1/2001', 'Website'],
        ['Node.js', '2018-03-14', 'Fun'],
      ],
    },
  });
  console.log(res.data);
  return res.status(200).json({ status: "OK" });
}