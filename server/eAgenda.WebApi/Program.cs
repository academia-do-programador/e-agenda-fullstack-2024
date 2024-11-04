using eAgenda.Dominio;
using eAgenda.Infra.Orm.Compartilhado;

namespace eAgenda.WebApi;

public class Program
{
    private const string NomeCors = "Desenvolvimento";

    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        //teste

        builder.Services.ConfigurarValidacao();
        builder.Services.ConfigurarIdentity();
        builder.Services.ConfigurarSerilog(builder.Logging, builder.Configuration);
        builder.Services.ConfigurarAutoMapper();
        builder.Services.ConfigurarInjecaoDependencia(builder.Configuration);
        builder.Services.ConfigurarSwagger();
        builder.Services.ConfigurarControllers();
        builder.Services.ConfigurarJwt();
        builder.Services.ConfigurarCors(NomeCors);

        var app = builder.Build();

        app.UseMiddleware<ManipuladorExcecoes>();

        // Suporte � OpenAPI
        app.UseSwagger();
        app.UseSwaggerUI();

        // Migra��es de banco de dados
        using var scope = app.Services.CreateScope();

        var dbContext = scope.ServiceProvider.GetRequiredService<IContextoPersistencia>();

        if (dbContext is EAgendaDbContext eAgendaDbContext)
        {
            MigradorBancoDados.AtualizarBancoDados(eAgendaDbContext);
        }

        app.UseHttpsRedirection();

        app.UseCors(NomeCors);

        app.UseAuthentication();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}