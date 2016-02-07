module.exports = function(router, Widget)
{
  router.route('/widgets')
    .post(function(req, res){
        var widget = new Widget();

        widget.name = req.body.name;
        widget.color = req.body.color;
        widget.price = req.body.price;
        widget.melts = req.body.melts;
        widget.inventory = req.body.inventory;

        widget.save(function(err){
          if(err){
            console.error('Error creating widget: ', err);
            res.send(err);
          }

          console.log('Widget created');
          return res.json({ message: 'Widget created' });
        });
      })
      .get(function(req, res){
          Widget.find(function(err, widgets){
            if(err) {
              console.error('Error finding all widgets: ', err);
              res.send(err);
            }

            console.log('Widgets found: ', widgets.length);
            return res.json(widgets);
          });
        });

router.route('/widgets/:id')
  .get(function(req, res) {
    Widget.findOne({ id: req.params.id }, function(err, widget){
      if(err){
        console.error('Error finding the widget: ', req.params.id);
        res.send(err);
      }

      console.log('Widget found: ', widget.id);
      return res.json(widget);
    });
  })
  .put(function(req, res) {
    Widget.findOne({ id: req.params.id }, function(err, widget){
      if(err){
        console.error('Error trying to update the widget: ', req.params.id);
        res.send(err);
      }

      widget.name = req.body.name;
      widget.color = req.body.color;
      widget.price = req.body.price;
      widget.melts = req.body.melts;
      widget.inventory = req.body.inventory;

      widget.save(function(err){
        if(err){
          console.error('Error trying to update the widget: ', req.params.id);
          res.send(err);
        }

        console.log('Widget updated: ', widget.id);
        return res.json({ message: 'Widget updated' });
      });
    });
  })
  .delete(function(req, res){
    Widget.findOne({ id: req.params.id }, function(err, widget){
      if(err){
        console.error('Error trying to find the widget to delete: ', req.params.id);
        res.send(err);
      }

      user.remove(function(err, w){
        if(err){
          console.error('Error trying to delete the widget: ', w);
          res.send(err);
        }

        console.log('Widget removed: ', w.id);
        return res.json({ message: 'Widget removed' });
      });
    });
  });
};
