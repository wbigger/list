let sites = [];

function updateSiteList(listSelector, sites) {
  $(listSelector).empty();

  sites.forEach(site => {
    const link = $('<a>')
      .attr('href', site.url)
      .text(site.title)
    const icon = $('<img>')
      .attr('src', 'assets/delete.png')
      .attr('alt', 'trash icon')
      .data('id', site.id)
      .addClass('icon')

    $(listSelector).append(
      $('<li>')
        .append(link)
        .append(
          $('<div>')
            .addClass('item')
            .append(icon)
        )
      );
  });

};


$(_ => {
  $('#form').submit(event => {
    event.preventDefault();

    sites.push({
      id: Math.floor(Math.random() * 100000),
      url: $('#url').val(),
      title: $('#title').val(),
      category: $('#category').val()
    });

    updateSiteList('#links', sites);

    $('#form').each(function() {
      this.reset();
    });
  })

  $('#links').on('click', '.icon', function() {
    const id = $(this).data('id');
    sites = sites.filter(site => site.id != id);
    
    updateSiteList('#links', sites);
  });
});