import { Kontakt } from "../models/kontakt";


export async function postKontakts(request, response) {
  const kontakt = new Kontakt(request.body);
  await kontakt.save();
  response.status(201).send(kontakt);
}