import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "azdinebelwwiti@gmail.com";

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

    const { error } = await resend.emails.send({
      from: "AEJ Rénovation <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: email || undefined,
      subject: `Nouvelle demande de devis — ${projectType}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <div style="background:#F97316;padding:20px 24px;border-radius:12px 12px 0 0">
            <h1 style="color:white;margin:0;font-size:20px">🏠 Nouvelle demande de devis</h1>
            <p style="color:rgba(255,255,255,0.85);margin:4px 0 0;font-size:14px">AEJ Rénovation Toulouse</p>
          </div>
          <div style="background:#f8fafc;padding:24px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#475569;width:140px;font-size:14px">Nom</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#475569;font-size:14px">Téléphone</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px"><a href="tel:${phone}" style="color:#F97316">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#475569;font-size:14px">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px">${email || "—"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#475569;font-size:14px">Type de projet</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px"><span style="background:#FFF7ED;color:#F97316;padding:3px 10px;border-radius:20px;font-size:13px;font-weight:600">${projectType}</span></td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding:10px 0;font-weight:600;color:#475569;font-size:14px;vertical-align:top">Message</td>
                <td style="padding:10px 0;color:#0f172a;font-size:14px;line-height:1.6">${message.replace(/\n/g, "<br>")}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top:24px;padding:16px;background:white;border-radius:8px;border:1px solid #e2e8f0">
              <a href="tel:${phone}" style="display:inline-block;background:#F97316;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px">
                📞 Appeler ${name}
              </a>
            </div>
            <p style="color:#94a3b8;font-size:12px;margin-top:16px">
              Reçu le ${new Date().toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
