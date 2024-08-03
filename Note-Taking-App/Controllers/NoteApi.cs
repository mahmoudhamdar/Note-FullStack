using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Note_Taking_App.Data;
using Note_Taking_App.Models;

namespace Note_Taking_App.Controllers;
[Route("api/[controller]")]
[ApiController]
public class NoteApi : ControllerBase
{
    private readonly Context _context;
    
    public NoteApi(Context context)
    {
        _context = context;
    }
    
    [HttpGet]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public ActionResult<Note> GetAllNotes()
    {
        return Ok(_context.Notes);
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

        Note note = _context.Notes.FirstOrDefault(n => n.Id == id);
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
        _context.Notes.Add(note);
        _context.SaveChanges();
        return Ok(_context.Notes);
    }

    [HttpPut("{id}")]
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

        var existingNote = _context.Notes.FirstOrDefault(n => n.Id == id);

        if (existingNote == null)
        {
            return NotFound();
        }

        existingNote.Content = note.Content;
        existingNote.Date = note.Date;
        existingNote.Title = note.Title;
        _context.SaveChanges();
        return Ok(_context.Notes);
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

        Note note = _context.Notes.FirstOrDefault(n => n.Id == id);
        if (note==null)
        {
            return BadRequest();
        }

        _context.Notes.Remove(note);
        _context.SaveChanges();
        return Ok(_context.Notes);
    }
    
    
    
}