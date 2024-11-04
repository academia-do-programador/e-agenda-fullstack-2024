using Serilog;

namespace eAgenda.WebApi.Config
{
    public static class SerilogConfigExtension
    {
        public static void ConfigurarSerilog(this IServiceCollection services, ILoggingBuilder logging)
        {
            var connectionStringLogs = Environment.GetEnvironmentVariable("AccountLogs");

            if (string.IsNullOrEmpty(connectionStringLogs) == false)
            {
                Log.Logger = new LoggerConfiguration()
                 .MinimumLevel.Information()
                 .Enrich.FromLogContext()
                 .WriteTo.AzureBlobStorage(
                   connectionString: connectionStringLogs,
                   storageContainerName: "logs",
                   outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss} [{Level:u3}] {Message:lj}{NewLine}{Exception}")
                 .CreateLogger();               
            }        
            else
            {
                Log.Logger = new LoggerConfiguration()
                  .MinimumLevel.Information()
                  .Enrich.FromLogContext()
                  .WriteTo.Console()
                  .CreateLogger();
            }

            Log.Logger.Information("Iniciando aplicação...");

            Log.Logger.Information("Chave de logs: " + connectionStringLogs);

            logging.ClearProviders();

            services.AddSerilog(Log.Logger);
        }
    }
}