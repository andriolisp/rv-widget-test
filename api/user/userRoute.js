module.exports = function(router, User)
{
  router.route('/users')
    .post(function(req, res){
        var user = new User();

        user.name = req.body.name;
        user.gravatar = req.body.gravatar;

        user.save(function(err){
          if(err) {
            console.error('Error creating user: ', err);
            res.send(err);
          }

          console.log('User created');
          return res.json({ message: 'User created' });
        });
    })
    .get(function(req, res){
      User.find(function(err, users){
        if(err) {
          console.error('Error finding all users: ', err);
          res.send(err);
        }

        console.log('Users found: ', users.length);
        res.json(users);
      });
    });

  router.route('/users/:id')
    .get(function(req, res){
      User.findOne({ id: req.params.id }, function(err, user){
        if(err){
          console.error('Error finding the user: ', req.params.id);
          res.send(err);
        }

        console.log('User found: ', user.id);
        return res.json(user);
      });
    })
    .put(function(req, res){
      User.findOne({ id: req.params.id }, function(err, user){
        if(err){
          console.error('Error trying to update the user: ', req.params.id);
          res.send(err);
        }

        user.name = req.body.name;
        user.gravatar = req.body.gravatar;

        user.save(function(err){
          if(err){
            console.error('Error trying to update the user: ', req.params.id);
            res.send(err);
          }

          console.log('User updated: ', user.id);
          return res.json({ message: 'User updated' });
        });
      });
    })
    .delete(function(req, res){
      User.findOne({ id: req.params.id }, function(err, user){
        if(err){
          console.error('Error trying to find the user to delete: ', req.params.id);
          res.send(err);
        }

        user.remove(function(err, u){
          if(err){
            console.error('Error trying to delete the user: ', u);
            res.send(err);
          }

          console.log('User removed: ', u.id);
          return res.json({ message: 'User removed' });
        });
      });
    });
};
