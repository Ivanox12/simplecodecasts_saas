class ContactMailer < ActionMailer::Base
  default to:'ivan.quevedo.garcia@gmail.com'
  @name = name
  @email = email
  @body = body
  
  mail(from: email, subject: 'Contact form Message')
end
