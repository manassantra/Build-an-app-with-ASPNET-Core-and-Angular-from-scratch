using System.Collections.Generic;
using System;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using API.Data;
using API.Entities;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        //api/[Controller]
        [HttpGet]
        public ActionResult<IList<AppUser>> GetUsers()
        {
             return _context.Users.ToList();
        }


        [HttpGet("{id}")]
        public ActionResult<AppUser> GetUsers(int id)
        {
                return _context.Users.Find(id);
        }

    }
}