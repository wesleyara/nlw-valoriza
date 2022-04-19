interface EnviarEmailProps {
  email: string;
  name: string;
  telefone?: string;
}
function enviarEmail({ name, email, telefone }: EnviarEmailProps) {
  console.log(
    `Enviando email para ${name} com email ${email} e telefone ${telefone}`
  );
}

console.log(enviarEmail({ name: "Wesley", email: "teste@gmail.com" }));
