using System.ComponentModel.DataAnnotations;

namespace vride.Models
{
    public class User
    {
        [Key]
        public int Sr_no { get; set; }
        public string Reg_no { get; set; }
        public string  Username { get; set; }
        public string PassWord { get; set; }
        
    }
}
