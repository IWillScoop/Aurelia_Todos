using TodoAPI.Models;
namespace TodoAPI.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<TodoAPI.Models.TodoAPIContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(TodoAPI.Models.TodoAPIContext context)
        {
            context.Todoes.AddOrUpdate(x => x.Id,
                new Todo()
                {
                    Id = 1,
                    Title = "First Todo",
                    Note = "Hey there",
                    Created = DateTime.Now,
                    Modified = DateTime.Now
                }, 
                new Todo()
                {
                    Id = 2,
                    Title = "Another Thing",
                    Note = "You gotta do this",
                    Created = DateTime.Now,
                    Modified = DateTime.Now
                },
                new Todo()
                {
                    Id = 3,
                    Title = "One mooooooore thing!",
                    Note = "You forgot the Talisman!",
                    Created = DateTime.Now,
                    Modified = DateTime.Now
                }

          );
        }
    }
}
