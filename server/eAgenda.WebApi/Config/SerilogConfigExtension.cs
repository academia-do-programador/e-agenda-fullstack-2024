using Serilog;

namespace eAgenda.WebApi.Config
{
    public static class SerilogConfigExtension
    {
        public static void ConfigurarSerilog(this IServiceCollection services, ILoggingBuilder logging, IConfiguration configuration)
        {
            string connectionStringLogs = configuration.GetConnectionString("AccountLogs");

            Log.Logger = new LoggerConfiguration()
              .MinimumLevel.Information()
              .Enrich.FromLogContext()
              .WriteTo.AzureBlobStorage(
                connectionString: connectionStringLogs,
                storageContainerName: "logs",
                outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss} [{Level:u3}] {Message:lj}{NewLine}{Exception}")
              .CreateLogger();

            Log.Logger.Information("Iniciando aplicação...");

            logging.ClearProviders();

            services.AddSerilog(Log.Logger);
        }
    }
}