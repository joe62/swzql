import  { buildSchema } from 'graphql'

// 用GraphQL模式语言构造一个模式（Shema）
export const Schema = buildSchema(`
	type RandomDie {
		numSides: Int!
		rollOnce: Int!
		roll(numRolls: Int!): [Int]
	}

	input MessageInput {
		content: String
		author: String
	}

	type Message {
		id: ID!
		content: String
		author: String
	}

	type Query {
		quoteOfTheDay: String
		random: Float!
		rollThreeDice: [Int]
		rollDice(numDice: Int!, numSides: Int): [Int]
		getDie(numSides: Int): RandomDie
		getMessage: String
		getMsg(id: ID!): Message
	}

	type Mutation {
		setMessage(message: String): String
		createMessage(input: MessageInput): Message
		updateMessage(id: ID!,input: MessageInput): Message
	}



`)

class RandomDie {
	constructor(numSides){
		this.numSides = numSides
	}

	rollOnce(){
		return 1+Math.floor(Math.random()*this.numSides)
	}

	roll ({numRolls}){
		const output = []
		for (var i = 0; i < numRolls; i++) {
			output.push(this.rollOnce())
		}
		return output
	}
}

const fakeDatabase = {}

class Message{
	constructor(id, {content, author}){
		this.id = id
		this.content = content
		this.author = author
	}
}

// root为每个入口API提供一个解析（Resolve)函数
export const root = {
	quoteOfTheDay: ()=> Math.random()<0.5? 'Take it easy': 'Salvation lies within',
	random: ()=>Math.random(),
	rollThreeDice: ()=>[1,2,3].map(_ => 1+Math.floor(Math.random()*6)),
	rollDice: ({numDice,numSides}) => {
		const output = []
		for (var i = 0; i < numDice; i++) {
			output.push(1+Math.floor(Math.random()*(numSides || 6)))
		}
		return output
	},
	getDie: ({numSides})=> new RandomDie(numSides||6),
	setMessage: ({message})=>{
		fakeDatabase.message = message;
		return message;
	},
	getMessage: ()=>fakeDatabase.message,
	getMsg: ({id})=>{
		if(!fakeDatabase[id]){
			throw new Error('no message exists with id'+id)}
		else {
		  return new Message(id,fakeDatabase[id])
		}
	},
	createMessage: ({input})=>{
		// Create a random id for our "database".
		const id = crypto.randomBytes(10).toString('hex')
		fakeDatabase[id] = input
		return new Message(id,input)
	},
	updateMessage: ({id,input})=>{
		if(!fakeDatabase[id]){
			throw new Error('no message exists with id'+id)
		} 
		fakeDatabase[id] = input
		return new Message(id,input)
	}
}


// "start": "nodemon ./server.js --exec babel-node",
// {random} => {"data": {"random":0.032681296639597956}}
// {quoteOfTheDay} => {"data": {"quoteOfTheDay": "Take it easy"}}
// {rollThreeDice} => {"data": {"rollThreeDice":[2,2,3]}}
// {rollDice(numDice:3,numSides:6)} => {"data": {"rollDice": [3,3,6]}}
// {getDie(numSides:6){rollOnce roll(numRolls: 3)}} => {"data": {"getDie": {"rollOnce": 6, "roll":[5,1,6]}}}
// mutation { createMessage(input: {author: 'andy',content: 'hope is a good thing'}){id}} => {"data": {"createMessage": {"id": "cd2a1082cb045cbf11da"}}}


