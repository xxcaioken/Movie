using Microsoft.AspNetCore.Hosting;
using Movie;
using Movie.DAO;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//var startup = new Startup(builder.Configuration);
//startup.ConfigureServices(builder.Services);


builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (!app.Environment.IsDevelopment())
//{
//    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
//    startup.Configure(app, builder);
//    //app.UseHsts();
//}
//startup.Configure(app, builder);


MovieDAO a = new();
a.Teste();//just for test, TODO -> remove 



app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
