#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["eAgenda.WebApi/eAgenda.WebApi.csproj", "eAgenda.WebApi/"]
COPY ["eAgenda.Aplicacao/eAgenda.Aplicacao.csproj", "eAgenda.Aplicacao/"]
COPY ["eAgenda.Dominio/eAgenda.Dominio.csproj", "eAgenda.Dominio/"]
COPY ["eAgenda.Infra.Orm/eAgenda.Infra.Orm.csproj", "eAgenda.Infra.Orm/"]
RUN dotnet restore "./eAgenda.WebApi/eAgenda.WebApi.csproj"
COPY . .
WORKDIR "/src/eAgenda.WebApi"
RUN dotnet build "./eAgenda.WebApi.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./eAgenda.WebApi.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "eAgenda.WebApi.dll"]