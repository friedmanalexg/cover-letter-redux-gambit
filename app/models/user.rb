class User < ApplicationRecord
    validates :username, presence: true
    
    has_many :letters
    has_many :prose_blocks

    has_secure_password

end
