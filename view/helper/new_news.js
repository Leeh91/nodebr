module.exports = function(chunk, context, bodies){
  return chunk.map(function(chunk){

      // Renderizamos o a noticia.
      chunk.render(bodies.block, context.push({}));

      // Avisamos para o dust.js que o nosso trabalho aqui terminou
      chunk.end();
    });
};
