"use server";

import slugify from "slugify";
import { revalidatePath } from "next/cache";
let clients = [];

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

  console.log("Νέος πελάτης:", {
    name: formData.get("name"),
    note: formData.get("note"),
    status: formData.get("status"),
  });
  revalidatePath("/clients");
}

export async function getClients() {
  return clients;
}
// SLUG //
export async function getClientBySlug(slug) {
  return clients.find((c) => c.slug === slug) || null;
}
