/* Change view on homepage */

$('.category-nav a').click(function(e) {
  e.preventDefault()

  $('.homepage-section').hide()

  $('.category-nav a').removeClass('active')
  $(this).addClass('active')

  const targetLink = this.classList[0]

  switch (targetLink) {
    case 'view-by-category':
      $('.category-view').show();
      $('.expand-all').show()
      break;
    case 'view-most-recent':
      $('.most-recent-view').show();
      $('.expand-all').hide()
      break;
    case 'view-alphabetically':
      $('.alphabetical-view').show();
      $('.expand-all').hide()
      break;
    case 'expand-all':
      toggleExpandAllButton(this)
    default:
      $('.category-list').show();
      $('view-by-category').addClass('active')
      $('.expand-all').show()
      break;
  }
})

function toggleExpandAllButton(expandAllButton) {
  $('.category-view').show()

  // Show/hide patterns
  togglePatternsListView($('.category-list .pattern-card'))

  // Change text on individual see more buttons
  $('.see-more-button').each(function(index, button) {
      $(button).html().toLowerCase() == 'see more' ? $(button).html('See less') : $(button).html('See more')
  })

}

/* Pattern category lists on homepage */

// Show see more button on load if more than 3 patterns in category
$('.category-list').each(function(index, category) {
  let patternsList = Array.from($(category).find('.pattern-card'))
  let seeMoreButton = $(category).find('.see-more-button');

  if (patternsList.length > 3) {
    $(seeMoreButton).show()
  }
})

// Hide extra patterns on page load
$('.category-list .pattern-card-list').each(function(index, category) {
  let patternsList = $(category).find('.pattern-card')
  togglePatternsListView(patternsList)
})

// Show/hide extra patterns on button click
// TODO: only attach click event to category headings with more than 3 patterns
$('.category-view .category-heading').click(function(e){
  e.preventDefault()
  const categoryHeading = this;

  const patternsList = $(this).parents('.category-list')
    .find('.pattern-card')

  togglePatternsListView(patternsList)
  toggleHeadingActiveState(categoryHeading)
})

function togglePatternsListView(patternsList) {
  $(patternsList).each(function(index, pattern){
    if ($(pattern).hasClass('preview')) {
      $(pattern).show()
    } else {
      $(pattern).toggle()
    }
  })
}

function toggleHeadingActiveState(categoryHeading) {
  // Add active state to header
  $(categoryHeading).toggleClass('active');

  // Change text in seeMoreButton
  const seeMoreButton = $(categoryHeading).parents('.category-list').find('.see-more-button');

  let isCategoryExpanded = seeMoreButton.html().toLowerCase() == 'see more'

  if (isCategoryExpanded) {
    seeMoreButton.html('See less')
  } else {
    seeMoreButton.html('See more')
    $('.expand-all').removeClass('active')
  }
}

/* Pattern page feedback form */

$('#giveDetailedFeedback').click(function(e) {
  e.preventDefault();
  $('.detailed-feedback').toggle();
})

$(".usage-feedback").submit(function(e) {
  e.preventDefault();

  let $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    $('.feedback-form').toggle();
    $('.success-message').toggle();
  });
});

$(".detailed-feedback").submit(function(e) {
  e.preventDefault();

  let $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    $('.feedback-form').toggle();
    $('.success-message').toggle();
  });
});
