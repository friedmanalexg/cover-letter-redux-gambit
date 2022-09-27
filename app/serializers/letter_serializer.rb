class LetterSerializer < ActiveModel::Serializer
  attributes :id, :letter_title, :recipient, :company, :job_title, :variable1, :variable2

  
end
