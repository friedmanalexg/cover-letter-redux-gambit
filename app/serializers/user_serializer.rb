class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :prose_blocks
  has_many :letters
end
