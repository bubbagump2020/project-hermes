class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true, presence: true
    validates :email, uniqueness: true, presence: true
    validates :password, presence: true

    def to_param
        username
    end

    def self.from_token_request(request)
        username = request.params["auth"] && request.params["auth"]["username"]
        self.find_by(username: username)
    end
end
