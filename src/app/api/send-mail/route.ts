import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message, htmlContent } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Campos obrigatórios faltando" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL,
      subject: "Olá",
      text: `Mensagem de ${name}:\n\n${message}`,
      html: htmlContent || `<p>${message}</p>`, 
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email enviado com sucesso!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Erro ao enviar:", error);
    return new Response(JSON.stringify({ error: "Erro ao enviar email" }), {
      status: 500,
    });
  }
}
