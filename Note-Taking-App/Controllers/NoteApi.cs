using Microsoft.AspNetCore.Mvc;
using Note_Taking_App.Models;

namespace Note_Taking_App.Controllers;
[Route("api/[controller]")]
[ApiController]
public class NoteApi : ControllerBase
{
  

    
    public static List<Note> _notes = new()
    {
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
    };
    
    [HttpGet]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public ActionResult<Note> GetAllNotes()
    {
        return Ok(_notes);
    }

    [HttpGet("{id:int}")]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public IActionResult Get(int id)
    {
        if (id<1)
        {
            return NotFound();
        }

        Note note = _notes.FirstOrDefault(n => n.Id == id);
        if (note==null)
        {
            return BadRequest();
        }

        return Ok(note);

    }

    [HttpPost]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public IActionResult Post([FromBody] Note note)
    {
        if (note==null)
        {
            return BadRequest();
        }
        if (note.Id<1)
        {
            return BadRequest();
        }
        _notes.Add(note);
        return Ok(_notes);
    }

    [HttpPut]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public IActionResult Put(int id, [FromBody] Note note)
    {
        if (id<1)
        {
            return NotFound();
        }

        if (note==null)
        {
            return BadRequest();
        }

        foreach (var varNote in _notes)
        {
            if (varNote.Id==id)
            {
                varNote.Content = note.Content;
                varNote.Date = note.Date;
                varNote.Title = note.Title;
                return Ok(_notes);
            }
        }

        return NotFound();
    }
    [HttpDelete("{id}")]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public IActionResult Delete(int id)
    {
        if (id<1)
        {
            return NotFound();
        }

        Note note = _notes.FirstOrDefault(n => n.Id == id);
        if (note==null)
        {
            return BadRequest();
        }

        _notes.Remove(note);

        return Ok(_notes);
    }
    
    
    
}