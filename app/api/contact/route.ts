import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, projectType, message } = body;

    if (!name || !phone || !projectType) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    // ─── Option 1 : Resend (recommandé pour Vercel) ───────────────────────────
    // npm install resend
    // Ajoutez RESEND_API_KEY et CONTACT_EMAIL dans .env.local
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "AEJ Rénovation <noreply@aej-renovation.fr>",
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `Nouvelle demande de devis — ${projectType}`,
    //   html: `
    //     <h2>Nouvelle demande de devis</h2>
    //     <p><strong>Nom :</strong> ${name}</p>
    //     <p><strong>Téléphone :</strong> ${phone}</p>
    //     <p><strong>Email :</strong> ${email || "non renseigné"}</p>
    //     <p><strong>Projet :</strong> ${projectType}</p>
    //     <p><strong>Message :</strong> ${message || "—"}</p>
    //   `,
    // });
    // ─────────────────────────────────────────────────────────────────────────

    // Pour l'instant, on log et on renvoie succès
    console.log("📬 Nouvelle demande de devis :", {
      name,
      phone,
      email,
      projectType,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}
