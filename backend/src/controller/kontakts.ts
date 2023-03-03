import { Kontakt } from "../models/kontakt";


export async function postKontakts(request, response) {
  const kontakt = new Kontakt(request.body);
  await kontakt.save();
  response.status(201).send(kontakt);
}

export async function deleteKontakts(request, response) {
  const kontakt = new Kontakt(request.body);
  await kontakt.delete();
  response.status(201).send("Löschen Erledigt!");
}
export async function findKontakts(request, response) {
  const kontakt = new Kontakt(request.body);
  response.body= await kontakt.getKontakt();
  response.status(201).send(response.body);
}