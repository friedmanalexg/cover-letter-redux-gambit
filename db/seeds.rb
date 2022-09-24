# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.create(username: "Testboy", password: "111")
Letter.create(letter_title: "Test Letter", recipient: "Josh at HR", company: "TestCo", job_title: "Test Job", variable1: "Test String 1", variable2: "Test String 2", user: User.first )
ProseBlock.create(block_title: "Test Greeting", block_type: "greeting", prose_content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", user: User.first)
ProseBlock.create(block_title: "Test Body", block_type: "body", prose_content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", user: User.first)
ProseBlock.create(block_title: "Test Closing", block_type: "closing", prose_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", user: User.first)