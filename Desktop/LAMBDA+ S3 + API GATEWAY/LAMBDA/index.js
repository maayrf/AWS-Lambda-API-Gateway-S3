exports.handler = (event, context, callback) => {
  let response = {};

  let body = {};
  if (event.body !== null && event.body !== undefined) {
    body = JSON.parse(event.body);
  }
  let from;
  let subject;
  let message;

  if (body.from) from = body.from;
  if (body.subject) subject = body.subject;
  if (body.message) message = body.message;

  if (!from || !subject || !message) {
    response = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({
        resultado: "Por favor, preencha todos os campos da mensagem.",
      }),
      statusCode: 400,
    };
  } else {
    response = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({ resultado: "Mensagem enviada com sucesso" }),
      statusCode: 200,
    };
  }

  callback(null, response);
};