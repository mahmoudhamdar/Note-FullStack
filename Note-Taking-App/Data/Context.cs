using Microsoft.EntityFrameworkCore;
using Note_Taking_App.Models;

namespace Note_Taking_App.Data;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options) : base(options)
    {

    }

    public DbSet<Note> Notes { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Note>().HasData(

            new Note()
            {
                Id = 1,
                Title = "grocery",
                Content = "Milk,Bread,Chicken,Juice",
                Date = DateTime.Today
            },
            new Note()
            {
                Id = 2,
                Title = "vhudhuwf",
                Content = "hjwoivhjcwifj",
                Date = DateTime.Now
            },
            new Note()
            {
                Id = 3,
                Title = "wjijewif",
                Content = "jf9wjfiqw",
                Date =DateTime.MaxValue
            }
            
            
        );

    }
}