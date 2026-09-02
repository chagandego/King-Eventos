/**
 * Endpoint do formulário de contato.
 *
 * Hoje ele apenas valida os campos e registra a solicitação no log do servidor.
 * Para receber as mensagens de verdade, integre com um serviço aqui embaixo
 * (Resend, SendGrid, Nodemailer, Formspree, planilha, CRM, etc.).
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();

    const nome = String(data?.nome ?? "").trim();
    const telefone = String(data?.telefone ?? "").trim();
    const email = String(data?.email ?? "").trim();

    if (!nome || !telefone || !email) {
      return Response.json(
        { ok: false, error: "Preencha ao menos nome, telefone e e-mail." },
        { status: 400 },
      );
    }

    // ----------------------------------------------------------------
    // TODO: integração com serviço de recebimento de mensagens.
    // Exemplo com Resend:
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "site@kingeventos.com.br",
    //     to: "contato@kingeventos.com.br",
    //     subject: `Nova solicitação de orçamento — ${nome}`,
    //     text: JSON.stringify(data, null, 2),
    //   });
    // ----------------------------------------------------------------

    console.log("[King Eventos] Nova solicitação de contato:", data);

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Não foi possível processar a solicitação." },
      { status: 500 },
    );
  }
}
