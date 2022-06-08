using System;
using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Myproject.Models;

namespace Myproject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarDetailsController : ControllerBase
    {
        private readonly MyDataBaseContext _context;

        public CarDetailsController(MyDataBaseContext context)
        {
            _context = context;
        }

        // GET
        [HttpPost("getcardetails")]
        public async Task<ActionResult<IEnumerable<CarDetail>>> GetCarDetails()
        {
          if (_context.CarDetails == null)
          {
              return NotFound();
          }
            return await _context.CarDetails.ToListAsync();
        }

        // GET
        [HttpGet("{id}")]
        public async Task<ActionResult<CarDetail>> GetCarDetail(string id)
        {
          if (_context.CarDetails == null)
          {
              return NotFound();
          }
            var carDetail = await _context.CarDetails.FindAsync(id);

            if (carDetail == null)
            {
                return NotFound();
            }

            return carDetail;
        }

        // PUT:
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCarDetail(string id, CarDetail carDetail)
        {
            if (id != carDetail.EmailId)
            {
                return BadRequest();
            }

            _context.Entry(carDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST
        [HttpPost("booking")]
        public async Task<ActionResult<CarDetail>> PostCarDetail(CarDetail carDetail)
        {
          if (_context.CarDetails == null)
          {
              return Problem("Entity set 'MyDataBaseContext.CarDetails'  is null.");
          }
            _context.CarDetails.Add(carDetail);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CarDetailExists(carDetail.EmailId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCarDetail", new { id = carDetail.EmailId }, carDetail);
        }

        // DELETE
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCarDetail(string id)
        {
            if (_context.CarDetails == null)
            {
                return NotFound();
            }
            var carDetail = await _context.CarDetails.FindAsync(id);
            if (carDetail == null)
            {
                return NotFound();
            }

            _context.CarDetails.Remove(carDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CarDetailExists(string id)
        {
            return (_context.CarDetails?.Any(e => e.EmailId == id)).GetValueOrDefault();
        }
    }
}
