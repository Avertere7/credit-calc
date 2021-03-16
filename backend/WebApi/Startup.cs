using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using AutoMapper;


namespace WebApi
{

    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            var config = Configuration.GetSection("configuration").Get<Configuration>();
            services.AddCors(options =>
            {
                options.AddPolicy(name: "MyCors",
                                  builder =>{ builder.WithOrigins(config.Urls.Main).AllowAnyHeader().AllowAnyMethod();});
            });
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            services.AddMvc().AddNewtonsoftJson();
            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app)
        {
            var scopeFactory = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>();
            app.UseDeveloperExceptionPage();
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors("MyCors");
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }

    }

}
