


import 'reflect-metadata';


import config from 'config';


import {
    DataSourceOptions,
    DataSource,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
  } from 'typeorm';



  @Entity({
    name: 'connection',
  })
  class Session extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    // @Column({
    //   default: 0,
    // })
    // type: number;
  
    // @Column({
    //   length: 20,
    // })
    // code: string;
  
    // @Column({
    //   length: 500,
    //   nullable: true,
    // })
    // requesturl: string;
  
    // @Column({
    //   length: 500,
    //   nullable: true,
    // })
    // inviteurl: string;
  
    // @Column({
    //   length: 200,
    //   nullable: true,
    // })
    // name: string;
  
    // @Column({
    //   default: 0,
    // })
    // status: number;
  
    // @Column({
    //   length: 500,
    //   nullable: true,
    // })
    // os: string;
  
    // @Column('text', {
    //   nullable: true,
    // })
    // monitorsJson: string;
  
    @CreateDateColumn()
    createtime: Date;

  }
  


  let datasource:DataSource;

  const initDatabase = async (): Promise<DataSource> => {
  
    let dbconf = JSON.parse(JSON.stringify(config.get('database')));
    const database =  Object.assign(dbconf);
    database.entities = [Session];
    database.synchronize = process.env.SYNC_DB === 'true';
    let options = database as DataSourceOptions;

    datasource = new DataSource(options);
    await datasource.initialize();
    return datasource;
  };




export default { Session, initDatabase};
  