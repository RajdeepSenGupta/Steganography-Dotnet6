using SteganographyDotnetCore.Controllers;
using SteganographyDotnetCore.Repository;

namespace SteganographyDotnetCore
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var builder = WebApplication.CreateBuilder(args);

      // Add services to the container.
      builder.Services.AddControllersWithViews();

      builder.Services.AddSingleton<Utility>();
      builder.Services.AddScoped<ISteganographyRepository, SteganographyRepository>();

      var app = builder.Build();

      // Configure the HTTP request pipeline.
      if (!app.Environment.IsDevelopment())
      {
        app.UseExceptionHandler("/Home/Error");
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
      }

      app.UseHttpsRedirection();
      app.UseStaticFiles();
      app.UseRouting();
      app.UseAuthorization();

      app.MapControllerRoute(
          name: "default",
          pattern: "{controller=Home}/{action=Index}/{id?}");

      #region Create Basic Directories when the program starts

      Seed seed = new Seed(new Utility());
      seed.SetInitialDirectories();

      #endregion

      app.Run();
    }
  }
}
