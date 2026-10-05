"use server";

import slugify from "slugify";
import { revalidatePath } from "next/cache";
let clients = [];
let appointments = [];

/* ADD CLIENT */
export async function addClient(formData) {
  const name = formData.get("name");
  const newClient = {
    id: String(Date.now()),
    name,
    slug: slugify(name, { lower: true }),
    note: formData.get("note"),
    status: formData.get("status"),
  };
  clients.push(newClient);

  // console.log("Νέος πελάτης:", {
  //   name: formData.get("name"),
  //   note: formData.get("note"),
  //   status: formData.get("status"),
  // });

  revalidatePath("/clients");
}

export async function getClients() {
  return [...clients]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((client) => {
      const clientAppointmenτs = appointments.filter(
        (a) => a.clientId === client.id,
      );
      const totalIncome = clientAppointmenτs.reduce(
        (sum, a) => sum + a.price + a.tips,
        0,
      );

      return {
        ...client,
        appointments: clientAppointmenτs.length,
        income: totalIncome,
      };
    });
}

/* ADD VISIT  */
export async function addAppointments(clientId, formData) {
  const newAppointment = {
    id: String(Date.now()),
    clientId,
    date: formData.get("date"),
    service: formData.get("service"),
    price: Number(formData.get("price")),
    tips: Number(formData.get("tips")),
    payment: formData.get("payment"),
  };
  appointments.push(newAppointment);

  //revalidatePath("/clients");
  revalidatePath(`/clients/${clientId}`);
}
/* Total Income */
export async function getClientTotalIncome(clientId) {
  const clientAppointments = appointments.filter(
    (a) => a.clientId === clientId,
  );
  return clientAppointments.reduce((sum, a) => sum + a.price + a.tips, 0);
}
export async function getAppointmentsByClientId(clientId) {
  return appointments
    .filter((a) => a.clientId === clientId)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

// SLUG //
export async function getClientBySlug(slug) {
  return clients.find((c) => c.slug === slug) || null;
}
