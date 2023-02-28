import { pgClient } from "../services/database";

export class Kontakt {
  adressID: number;
  vorname1: string;
  name: string;
  strasseNr: string;
  landPLZ: string;
  ort: string;
  telefon: string;
  email1: string;
  email2: string;
  telExtra1: string;
  telExtra2: string;
  telExtra3: string;
  spitzname: string;
  vorname2: string;
  geburtstag: Date;
  hochzeitstag: Date;
  kennengelernt: Date;
  woKennengelernt: string;
  gemeinsamkeiten: string;
  lieblingsGetraenk: string;
  lieblingsAktion: string;
  hobby1: string;
  hobby2: string;
  linkAcount: string;
  xingAccount: string;
  facebookAccount: string;
  partner: string;
  freunde: string;
  kollege: string;
  familie: string;


    constructor(data: Record<string, unknown>) {
    this.adressID = data.adressID as number;
    this.vorname1 = data.vorname1 as string;
    this.name = data.name as string;
    this.strasseNr = data.strasseNr as string;
    this.landPLZ = data.landPLZ as string;
    this.ort = data.ort as string;
    this.telefon = data.telefon as string;
    this.email1 = data.email1 as string;
    this.email2 = data.email2 as string;
    this.telExtra1 = data.telExtra1 as string;
    this.telExtra2 = data.telExtra2 as string;
    this.telExtra3 = data.telExtra3 as string;
    this.spitzname = data.spitzname as string;
    this.vorname2 = data.vorname2 as string;
    this.geburtstag = data.geburtstag as Date;
    this.hochzeitstag = data.hochzeitstag as Date;
    this.kennengelernt = data.kennengelernt as Date;
    this.woKennengelernt = data.woKennengelernt as string;
    this.gemeinsamkeiten = data.gemeinsamkeiten as string;
    this.lieblingsGetraenk = data.lieblingsGetraenk as string;
    this.lieblingsAktion = data.lieblingsAktion as string;
    this.hobby1 = data.hobby1 as string;
    this.hobby2 = data.hobby2 as string;
    this.linkAcount = data.linkAcount as string;
    this.xingAccount = data.xingAccount as string;
    this.facebookAccount = data.facebookAccount as string;
    this.partner = data.partner as string;
    this.freunde = data.freunde as string;
    this.kollege = data.kollege as string;
    this.familie = data.familie as string;
    

  }

   public async save() {
    const createQueryString = 'INSERT INTO DB_ADR ("Vorname1", "Name", "strsseNr", "landPLZ", "ort", "telefon", "email1", "email2", "telExtra1", "telExtra2", "telExtra3", "spitzname", "vorname2", geburtstag, hochzeitstag, kennengelerrnt, "woKennengelernt", "gemeinsamkeiten", "lieblingsGetraenk", "lieblingsAktion", "hobby1", "hobby2", "linkAccount", "xingAccount", "facebookAccount", "partner", "freunde", "kollege", "familie") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29)';
    const res = await pgClient.query(createQueryString, [this.vorname1, this.name, this.strasseNr, this.landPLZ, this.ort, this.telefon, this.email1, this.email2, this.telExtra1, this.telExtra2, this.telExtra3, this.spitzname, this.vorname2, this.geburtstag, this.hochzeitstag, this.kennengelernt, this.woKennengelernt, this.gemeinsamkeiten, this.lieblingsGetraenk, this.lieblingsAktion, this.hobby1, this.hobby2, this.linkAcount, this.xingAccount, this.facebookAccount, this.partner, this.freunde, this.kollege, this.familie]);
    this.adressID = res.rows[0].adressID;
  }

  public async delete() {
    const result = await pgClient.query(`DELETE FROM DB_ADR name = $1 and vorname1 = $2`, [this.name, this.vorname1]);

  }
}
