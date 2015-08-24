using System;
using System.ComponentModel.DataAnnotations;

namespace TodoAPI.Models
{
    public class Todo
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(140)]
        public string Title { get; set; }
        public string Note { get; set; }
        public bool IsChecked { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
    }
}
