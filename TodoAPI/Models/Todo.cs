using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoAPI.Models
{
    public class Todo
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [MaxLength(140)]
        public string Title { get; set; }
        public string Note { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
    }
}
