using System.Runtime.InteropServices.JavaScript;

namespace Note_Taking_App.Models;

public class Note
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime Date { get; set; }
}