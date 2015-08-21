using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using TodoAPI.Models;

namespace TodoAPI.Controllers
{
    [EnableCorsAttribute("*", "*","*")]
    public class TodosController : ApiController
    {
        private TodoAPIContext db = new TodoAPIContext();

        // GET: api/Todos
        public IQueryable<Todo> GetTodos()
        {
            return db.Todoes;
        }

        // GET: api/Todos/5
        [ResponseType(typeof(Todo))]
        public async Task<IHttpActionResult> GetTodo(int id)
        {
            Todo todo = await db.Todoes.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }

            return Ok(todo);
        }

        // PUT: api/Todos/5
        [ResponseType(typeof(void))]
        [EnableCorsAttribute("*", "*", "*")]
        public async Task<IHttpActionResult> PutTodo(Todo todo)
        {
            int id = todo.Id;
            todo.Modified = DateTime.Now;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != todo.Id)
            {
                return BadRequest();
            }

            db.Entry(todo).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(todo);
        }

        // POST: api/Todos
        [ResponseType(typeof(Todo))]
        [EnableCorsAttribute("*", "*", "*")]
        public async Task<IHttpActionResult> PostTodo(Todo todo)
        {
            todo.Modified = DateTime.Now;
            todo.Created = DateTime.Now;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.Todoes.Add(todo);
            await db.SaveChangesAsync();

            return Ok(todo);
        }

        // DELETE: api/Todos/5
        [ResponseType(typeof(Todo))]
        public async Task<IHttpActionResult> DeleteTodo(int id)
        {
            Todo todo = await db.Todoes.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }

            db.Todoes.Remove(todo);
            await db.SaveChangesAsync();

            return Ok(todo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TodoExists(int id)
        {
            return db.Todoes.Count(e => e.Id == id) > 0;
        }
    }
}